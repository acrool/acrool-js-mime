import {mimeTypeMap} from './mimeMap';

/**
 * Mime type to extname
 * @param mimeType (ex: image/png)
 */
export const mimeType2extname = (mimeType: string): string => {
    const findExtname = mimeTypeMap[mimeType];
    if(findExtname?.length > 0){
        return `.${findExtname[0]}`;
    }
    return '';
};

/**
 * Extname to mime type
 * @param extname (ex: .pdf)
 */
export const extname2mimeType = (extname: string): string => {
    const formatExtname = extname.replace('.','');
    const parse = Object.entries(mimeTypeMap);
    const active = parse.find(row => {
        return row[1].includes(formatExtname);
    });
    if(active){
        return active[0];
    }
    return '';
};
