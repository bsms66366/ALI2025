//fileUtils.js
import * as FileSystem from 'expo-file-system';

const getDocumentDirectory = async () => {
  const directory = FileSystem.documentDirectory;
  console.log('Document Directory:', directory);
  return directory;
};

export { getDocumentDirectory };