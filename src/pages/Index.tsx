
import React, { useState } from 'react';
import { ImageUpload } from '@/components/ImageUpload';
import { ColorPalette } from '@/components/ColorPalette';
import { BodyTypeResult } from '@/components/BodyTypeResult';
import { ClothingRecommendations } from '@/components/ClothingRecommendations';
import { analyzeImage, getColorSeasonDescription, type AnalysisResult } from '@/utils/imageAnalysis';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, User } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      console.log('Starting image analysis for file:', file.name);
      const result = await analyzeImage(file);
      console.log('Analysis result:', result);
      
      setAnalysisResult(result);
      toast.success('Análise concluída com sucesso!');
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast.error('Erro ao analisar a imagem. Tente novamente.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="gradient-bg border-b border-rose-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-white/80 shadow-lg">
                <Sparkles className="h-8 w-8 text-rose-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Análise de Coloração Pessoal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra sua cartela de cores ideal e tipo de corpo através de análise inteligente da sua foto
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {!analysisResult ? (
            <>
              {/* Upload Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Envie sua foto para começar
                  </h2>
                  <p className="text-muted-foreground">
                    Para melhores resultados, use uma foto de corpo inteiro com boa iluminação natural
                  </p>
                </div>
                
                <ImageUpload 
                  onImageUpload={handleImageUpload} 
                  isAnalyzing={isAnalyzing}
                />
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 card-gradient">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-rose-100">
                      <Palette className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Coloração Pessoal</h3>
                      <p className="text-sm text-muted-foreground">
                        Analisamos sua cor de pele, cabelo e olhos para determinar sua estação de cores
                        entre as 12 classificações possíveis.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-brown-100">
                      <User className="h-6 w-6 text-brown-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Tipo de Corpo</h3>
                      <p className="text-sm text-muted-foreground">
                        Identificamos seu tipo de corpo para sugerir roupas que valorizem
                        sua silhueta natural.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          ) : (
            <>
              {/* Results Section */}
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-white/80 shadow-lg">
                      <Sparkles className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Sua Análise Completa
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {getColorSeasonDescription(analysisResult.colorSeason)}
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={handleNewAnalysis}
                      variant="outline"
                      className="bg-white/80 hover:bg-white/90 border-rose-200 hover:border-rose-300"
                    >
                      Nova Análise
                    </Button>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="animate-fade-in">
                  <ColorPalette 
                    season={analysisResult.colorSeason}
                    colors={analysisResult.colorPalette}
                  />
                </div>

                {/* Body Type */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <BodyTypeResult bodyType={analysisResult.bodyType} />
                </div>

                {/* Clothing Recommendations */}
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <ClothingRecommendations 
                    season={analysisResult.colorSeason}
                    bodyType={analysisResult.bodyType}
                  />
                </div>

                {/* Confidence Score */}
                <Card className="p-4 card-gradient text-center">
                  <p className="text-sm text-muted-foreground">
                    Precisão da análise: {Math.round(analysisResult.confidence * 100)}%
                  </p>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="gradient-bg border-t border-rose-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Análise de Coloração Pessoal. Desenvolvido com inteligência artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
