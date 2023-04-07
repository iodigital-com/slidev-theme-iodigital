import AutoImport from 'unplugin-auto-import/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [
        Icons({
            customCollections: {
                io: FileSystemIconLoader('icons/io'),
            },
        }),
        AutoImport({
            imports: ['vue'],
            resolvers: [
                IconsResolver({
                    prefix: 'icon',
                    enabledCollections: ['mdi'],
                    customCollections: ['io'],
                }),
            ],
            dts: true,
        }),
    ],
});
