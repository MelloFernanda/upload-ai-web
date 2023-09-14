import {Github, FileVideo} from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/ui/button'


export function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="min-h-screen flex flex-col">
      <head className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💙</span>

          <Separator orientation='vertical' className="h-6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2"/>
            Github
            </Button>
        </div>
      </head>

      <body className="flex-1 p-6 flex gap-6">

        <div className="flex flex-col flex-1">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
            className="resize-none p-4 leading-relaxed"
              placeholder='Inclua o prompt para a IA...'
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder='Resposta gerada pela IA...'
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">Lembre-se: você pode utilizar a variável <code className="text-blue-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado</p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
                <FileVideo/>
                Selecione um vídeo
            </label>
            <input type='file' id='video' accept='video/mp4' className="sr-only"/>

            <Separator/>

            <div>
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea
                id='transcription-prompt'
                className="min-h-20 leading-relaxed"
                placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'/>
            </div>



            
          </form>
        </aside>

      </body>


    </div>
  )
}

