
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isAnalyzing: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isAnalyzing }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    disabled: isAnalyzing
  });

  return (
    <Card className="p-8 card-gradient border-2 border-dashed border-rose-200 hover:border-rose-300 transition-colors">
      <div
        {...getRootProps()}
        className={`cursor-pointer text-center ${isDragActive ? 'scale-105' : ''} transition-transform`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg shadow-md"
            />
            {!isAnalyzing && (
              <p className="text-sm text-muted-foreground">
                Clique para trocar a imagem ou solte uma nova aqui
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-rose-100">
                {isDragActive ? (
                  <Upload className="h-8 w-8 text-rose-500" />
                ) : (
                  <ImageIcon className="h-8 w-8 text-rose-500" />
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {isDragActive ? 'Solte sua foto aqui' : 'Faça upload da sua foto'}
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Envie uma foto de corpo inteiro com boa iluminação para uma análise precisa
                da sua coloração pessoal e tipo de corpo
              </p>
            </div>
            
            <Button
              type="button"
              variant="outline"
              className="mt-4 bg-white/80 hover:bg-white/90 border-rose-200 hover:border-rose-300"
              disabled={isAnalyzing}
            >
              Escolher arquivo
            </Button>
          </div>
        )}
        
        {isAnalyzing && (
          <div className="mt-4 p-4 bg-rose-50 rounded-lg">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-rose-500 border-t-transparent"></div>
              <span className="text-sm text-rose-600">Analisando sua imagem...</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
