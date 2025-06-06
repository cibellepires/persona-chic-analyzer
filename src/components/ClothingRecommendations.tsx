
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ClothingRecommendationsProps {
  season: string;
  bodyType: string;
}

export const ClothingRecommendations: React.FC<ClothingRecommendationsProps> = ({ season, bodyType }) => {
  const getRecommendations = (season: string, bodyType: string) => {
    const recommendations = {
      tops: [] as string[],
      bottoms: [] as string[],
      dresses: [] as string[],
      accessories: [] as string[]
    };

    // Recomendações baseadas na estação
    const seasonRecommendations: { [key: string]: any } = {
      'primavera clara': {
        tops: ['Blusas em tons pastéis', 'Camisas de seda clara', 'Cardigans delicados'],
        colors: ['Rosa claro', 'Azul bebê', 'Lavanda', 'Amarelo suave']
      },
      'primavera quente': {
        tops: ['Blusas em cores vivas', 'Tops dourados', 'Camisas coral'],
        colors: ['Coral', 'Dourado', 'Verde jade', 'Turquesa']
      },
      'verão claro': {
        tops: ['Blusas em tons frios', 'Camisas azul claro', 'Tops em cinza suave'],
        colors: ['Azul claro', 'Rosa acinzentado', 'Lavanda suave', 'Cinza claro']
      },
      'outono escuro': {
        tops: ['Blusas em tons terrosos', 'Suéteres em marrom', 'Camisas bordô'],
        colors: ['Marrom chocolate', 'Bordô', 'Verde floresta', 'Dourado escuro']
      },
      'inverno escuro': {
        tops: ['Blusas em cores intensas', 'Tops em preto', 'Camisas em branco puro'],
        colors: ['Preto', 'Branco puro', 'Vermelho intenso', 'Azul marinho']
      }
    };

    // Recomendações baseadas no tipo de corpo
    const bodyTypeRecommendations: { [key: string]: any } = {
      'oval': {
        tops: ['Decotes em V', 'Blusas com detalhes verticais', 'Cardigans longos'],
        bottoms: ['Calças retas', 'Saias A-line', 'Leggings com túnicas'],
        dresses: ['Vestidos empire', 'Vestidos wrap', 'Vestidos com cintura alta']
      },
      'triângulo': {
        tops: ['Blusas com ombros estruturados', 'Tops com detalhes no busto', 'Blazers com ombreiras'],
        bottoms: ['Calças retas', 'Calças bootcut', 'Saias retas'],
        dresses: ['Vestidos A-line', 'Vestidos com cintura marcada', 'Vestidos com top estruturado']
      },
      'ampulheta': {
        tops: ['Blusas ajustadas', 'Tops que marquem a cintura', 'Camisas fitted'],
        bottoms: ['Calças skinny', 'Saias lápis', 'Calças de cintura alta'],
        dresses: ['Vestidos bodycon', 'Vestidos wrap', 'Vestidos com cintura marcada']
      }
    };

    // Combinar recomendações
    const seasonData = seasonRecommendations[season] || seasonRecommendations['primavera clara'];
    const bodyData = bodyTypeRecommendations[bodyType] || bodyTypeRecommendations['oval'];

    recommendations.tops = [...seasonData.tops, ...bodyData.tops];
    recommendations.bottoms = bodyData.bottoms || ['Calças retas', 'Saias A-line'];
    recommendations.dresses = bodyData.dresses || ['Vestidos versáteis'];
    recommendations.accessories = [
      'Cintos que marquem a cintura',
      'Joias em tons harmoniosos',
      'Bolsas estruturadas',
      'Sapatos em cores neutras'
    ];

    return recommendations;
  };

  const recommendations = getRecommendations(season, bodyType);

  return (
    <Card className="p-6 card-gradient">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Recomendações de Roupas
          </h3>
          <p className="text-sm text-muted-foreground">
            Sugestões personalizadas baseadas na sua coloração {season} e tipo de corpo {bodyType}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Tops & Blusas</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.tops.slice(0, 6).map((item, index) => (
                <Badge key={index} variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Partes Inferiores</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.bottoms.map((item, index) => (
                <Badge key={index} variant="secondary" className="bg-brown-100 text-brown-700 hover:bg-brown-200">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Vestidos</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.dresses.map((item, index) => (
                <Badge key={index} variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Acessórios</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.accessories.map((item, index) => (
                <Badge key={index} variant="secondary" className="bg-brown-100 text-brown-700 hover:bg-brown-200">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
