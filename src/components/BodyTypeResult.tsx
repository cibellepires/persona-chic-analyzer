
import React from 'react';
import { Card } from '@/components/ui/card';

interface BodyTypeResultProps {
  bodyType: string;
}

export const BodyTypeResult: React.FC<BodyTypeResultProps> = ({ bodyType }) => {
  const getBodyTypeDescription = (type: string) => {
    const descriptions: { [key: string]: { description: string; tips: string[] } } = {
      'oval': {
        description: 'Silhueta arredondada com ombros e quadris proporcionais',
        tips: [
          'Use peças que criem definição na cintura',
          'Aposte em decotes em V ou U',
          'Prefira tecidos que caiam bem no corpo',
          'Evite peças muito justas ou muito largas'
        ]
      },
      'triângulo': {
        description: 'Quadris mais largos que os ombros',
        tips: [
          'Use tops com detalhes nos ombros',
          'Aposte em decotes ombro a ombro',
          'Prefira calças retas ou bootcut',
          'Evite estampas na parte inferior'
        ]
      },
      'triângulo invertido': {
        description: 'Ombros mais largos que os quadris',
        tips: [
          'Use peças que valorizem os quadris',
          'Aposte em calças com volume',
          'Prefira tops lisos na parte superior',
          'Use cintos para marcar a cintura'
        ]
      },
      'retangular': {
        description: 'Ombros e quadris proporcionais com pouca definição de cintura',
        tips: [
          'Crie curvas com cintos marcados',
          'Use peças que definam a silhueta',
          'Aposte em camadas e volumes estratégicos',
          'Prefira decotes que alonguem o pescoço'
        ]
      },
      'ampulheta': {
        description: 'Ombros e quadris proporcionais com cintura bem definida',
        tips: [
          'Use peças que marquem a cintura',
          'Aposte em peças ajustadas ao corpo',
          'Prefira tecidos que acompanhem as curvas',
          'Evite volumes desnecessários'
        ]
      }
    };
    return descriptions[type] || { description: 'Tipo de corpo único', tips: ['Valorize suas características naturais'] };
  };

  const typeInfo = getBodyTypeDescription(bodyType);

  return (
    <Card className="p-6 card-gradient">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground capitalize mb-2">
            Tipo de Corpo: {bodyType}
          </h3>
          <p className="text-sm text-muted-foreground">
            {typeInfo.description}
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-3">Dicas de estilo:</h4>
          <ul className="space-y-2">
            {typeInfo.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
