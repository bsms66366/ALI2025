import { NiivueCanvas, NVROptions, NVRVolume } from "./niivue-react/src";
import { useImmer } from "use-immer";
import { Niivue, SLICE_TYPE } from "./niivue-react/node_modules/@niivue/niivue";
//import { Niivue, SLICE_TYPE } from "@niivue/niivue";
import React, { useState } from "react";
import styles from "./niivue-react/examples/demos/upstream.module.css";

const FIXED_OPTIONS: NVROptions = {
  isColorbar: true,
  backColor: [0.2, 0.2, 0.3, 1],
  isNearestInterpolation: true,
  sliceType: SLICE_TYPE.MULTIPLANAR,
};

const ModulateScalar = () => {
  const [crosshairLocation, setCrosshairLocation] = useState("");
  const [volumes, setVolumes] = useImmer<{ [key: string]: NVRVolume }>({
    func: {
      url: "/images/mean_func.nii.gz",
      opacity: 1,
      colormap: "gray",
    },
    cope: {
      url: "/images/cope1.nii.gz",
      colormap: "winter",
      opacity: 1,
      cal_min: 0.0,
      cal_max: 100,
      modulationImageUrl: "/images/tstat1.nii.gz",
      modulateAlpha: 1,
    },
    tstat: {
      url: "/images/tstat1.nii.gz",
      opacity: 0,
      colormap: "warm",
      cal_min: 0,
      cal_max: 4.5,
    },
  });

  const modeNames = Object.keys(volumes).concat(["modulate"]);

  const getMode = () => {
    if (volumes.cope?.modulationImageUrl) {
      return "modulate";
    }
    const opaqueVolume = Object.entries(volumes)
      .filter(([key, _value]) => key !== "func")
      .find(([_key, value]) => value.opacity > 0);
    return opaqueVolume === undefined ? "func" : opaqueVolume[0];
  };

  const onModeSelected = (e: React.SyntheticEvent) => setMode((e.target as HTMLSelectElement).value);

  const setMode = (selectedMode: string) => {
    setVolumes((draft) => {
      draft.func.opacity = 1.0;
      draft.tstat.opacity = 0.0;
      draft.cope.opacity = 0.0;
      if (selectedMode === "modulate") {
        draft.cope.opacity = 1.0;
        draft.tstat.opacity = 0.0;
        draft.cope.modulationImageUrl = volumes.tstat.url;
      } else {
        draft[selectedMode].opacity = 1.0;
        draft.cope.modulationImageUrl = null;
      }
    });
  };

  const onAlphaToggled = (_e: React.SyntheticEvent) =>
    setModulateAlpha(volumes.cope.modulateAlpha === 0 ? 1 : 0);

  const setModulateAlpha = (alpha: number) => {
    setVolumes((draft) => {
      draft.cope.modulateAlpha = alpha;
    });
  };

  const configNiivue = (nv: Niivue) => {
    nv.onLocationChange = setCrosshairLocation;
  };

  return (
    <div className={styles.root}>
      <header>
        <label htmlFor="mode">Display:</label>
        <select name="mode" id="mode" value={getMode()} onChange={onModeSelected}>
          {modeNames.map((mode) => (
            <option value={mode} key={mode}>
              {mode}
            </option>
          ))}
        </select>
        <label htmlFor="slideT"> &nbsp; tMax</label>
        <input type="range" min="1" max="50" defaultValue="45" className="slider" id="slideT" />
        <label htmlFor="slideC"> &nbsp; cMax</label>
        <input type="range" min="1" max="200" defaultValue="100" className="slider" id="slideC" />
        <label htmlFor="slide2"> &nbsp; Outline</label>
        <input type="range" min="0" max="4" defaultValue="1" className="slider" id="slide2" />
        <label htmlFor="check">ClipDark</label>
        <input type="checkbox" id="check" defaultChecked={false} />
        <label>
          ModulateAlpha
          <input type="checkbox" onChange={onAlphaToggled} checked={volumes.cope.modulateAlpha === 1} />
        </label>
      </header>
      <main>
        <NiivueCanvas volumes={React.useMemo(() => Object.values(volumes), [volumes])} options={FIXED_OPTIONS} onStart={configNiivue} />
      </main>
      <footer>{crosshairLocation}</footer>
    </div>
  );
};

export default ModulateScalar;
