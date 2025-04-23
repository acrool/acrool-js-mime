import {extname2mimeType, mimeType2extname} from './utils';


describe('extname2mimeType', () => {
    it('should convert jpg extension to image/jpeg', () => {
        expect(extname2mimeType('jpg')).toBe('image/jpeg');
        expect(extname2mimeType('.jpg')).toBe('image/jpeg');
    });

    it('should convert png extension to image/png', () => {
        expect(extname2mimeType('png')).toBe('image/png');
        expect(extname2mimeType('.png')).toBe('image/png');
    });

    it('should return undefined for unknown extension', () => {
        expect(extname2mimeType('unknown')).toBe('');
        expect(extname2mimeType('.unknown')).toBe('');
    });
});


describe('mimeType2extname', () => {
    it('should convert image/jpeg to jpg', () => {
        expect(mimeType2extname('image/jpeg')).toBe('.jpg');
    });

    it('should convert image/png to png', () => {
        expect(mimeType2extname('image/png')).toBe('.png');
    });

    it('should return undefined for unknown mime type', () => {
        expect(mimeType2extname('unknown/type')).toBe('');
    });
});
