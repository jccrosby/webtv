import { config } from './config';

describe('config', () => {
    it('should return "config"', () => {
        expect(config()).toEqual('config');
    });
});
