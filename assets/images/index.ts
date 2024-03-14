// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const about = Asset.fromModule(require('./about.png')).uri;
const hero = Asset.fromModule(require('./hero.png')).uri;
const founder = Asset.fromModule(require('./founder.jpeg')).uri;



const ImageCollection = {
   about,
   hero,
   founder
}

export { ImageCollection };
