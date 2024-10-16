import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
  // 特定のディレクトリのみを対象にする設定
  // sources: (filename: string) => {
  //   return filename.indexOf("src/path/to/dir") !== -1;
  // },
  // 「opt-in」モードにする設定
  compilationMode: "annotation",
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', ReactCompilerConfig]
        ],
      },
    }),
  ],
})
