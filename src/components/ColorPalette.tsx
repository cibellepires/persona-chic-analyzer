
import React from 'react';
import { Card } from '@/components/ui/card';

interface ColorPaletteProps {
  season: string;
  colors: string[];
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ season, colors }) => {
  const getSeasonDescription = (season: string) => {
    const descriptions: { [key: string]: string } = {
      'primavera clara': 'Cores suaves e delicadas com tons pastéis',
      'primavera quente': 'Cores vibrantes e quentes com base dourada',
      'primavera viva': 'Cores intensas e brilhantes com energia',
      'verão claro': 'Cores frias e suaves com tons acinzentados',
      'verão frio': 'Cores intensas e frias com base azulada',
      'verão suave': 'Cores neutras e suaves com tons frios',
      'outono escuro': 'Cores profundas e ricas com tons terrosos',
      'outono quente': 'Cores quentes e douradas com intensidade',
      'outono suave': 'Cores neutras e amadeiradas com delicadeza',
      'inverno escuro': 'Cores profundas e contrastantes',
      'inverno frio': 'Cores puras e intensas com base fria',
      'inverno vivo': 'Cores brilhantes e contrastantes'
    };
    return descriptions[season] || 'Sua paleta de cores personalizada';
  };

  return (
    <Card className="p-6 card-gradient">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground capitalize mb-2">
            {season}
          </h3>
          <p className="text-sm text-muted-foreground">
            {getSeasonDescription(season)}
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {colors.map((color, index) => (
            <div key={index} className="space-y-2">
              <div
                className="w-full h-16 rounded-lg shadow-sm border-2 border-white/50"
                style={{ backgroundColor: color }}
              />
              <div className="text-xs text-center text-muted-foreground font-mono">
                {color}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
