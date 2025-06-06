
// Simulação de análise de imagem com visão computacional
// Em uma implementação real, isso seria feito com uma API de ML/CV

export interface AnalysisResult {
  colorSeason: string;
  bodyType: string;
  colorPalette: string[];
  confidence: number;
}

export const analyzeImage = async (imageFile: File): Promise<AnalysisResult> => {
  // Simular tempo de processamento
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Simular análise baseada em características da imagem
  const seasons = [
    'primavera clara', 'primavera quente', 'primavera viva',
    'verão claro', 'verão frio', 'verão suave',
    'outono escuro', 'outono quente', 'outono suave',
    'inverno escuro', 'inverno frio', 'inverno vivo'
  ];

  const bodyTypes = ['oval', 'triângulo', 'triângulo invertido', 'retangular', 'ampulheta'];

  const colorPalettes: { [key: string]: string[] } = {
    'primavera clara': ['#FFB6C1', '#E6E6FA', '#F0E68C', '#98FB98', '#87CEEB', '#DDA0DD', '#F5DEB3', '#FFA07A'],
    'primavera quente': ['#FF6347', '#FFD700', '#FF8C00', '#32CD32', '#00CED1', '#FF69B4', '#BA55D3', '#20B2AA'],
    'primavera viva': ['#FF1493', '#00FF00', '#FF4500', '#1E90FF', '#FFD700', '#FF6347', '#32CD32', '#FF69B4'],
    'verão claro': ['#B0C4DE', '#F0F8FF', '#E6E6FA', '#D3D3D3', '#AFEEEE', '#F5F5DC', '#FAF0E6', '#FFF8DC'],
    'verão frio': ['#4682B4', '#6495ED', '#7B68EE', '#9370DB', '#8A2BE2', '#4169E1', '#0000CD', '#191970'],
    'verão suave': ['#708090', '#778899', '#B0C4DE', '#D3D3D3', '#A9A9A9', '#C0C0C0', '#DCDCDC', '#F5F5F5'],
    'outono escuro': ['#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B22222', '#800000', '#556B2F', '#8B8000'],
    'outono quente': ['#FF8C00', '#FF7F50', '#CD853F', '#DAA520', '#B8860B', '#D2691E', '#A0522D', '#8B4513'],
    'outono suave': ['#DEB887', '#D2B48C', '#BC8F8F', '#F4A460', '#CD853F', '#D2691E', '#A0522D', '#8B7355'],
    'inverno escuro': ['#000000', '#2F4F4F', '#191970', '#800000', '#8B0000', '#483D8B', '#2E2E2E', '#0D0D0D'],
    'inverno frio': ['#0000FF', '#4169E1', '#0000CD', '#8A2BE2', '#4B0082', '#6A5ACD', '#7B68EE', '#9370DB'],
    'inverno vivo': ['#FF0000', '#FF1493', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500']
  };

  // Simular resultado aleatório (em implementação real seria baseado na análise da imagem)
  const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
  const randomBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
  const palette = colorPalettes[randomSeason] || colorPalettes['primavera clara'];

  return {
    colorSeason: randomSeason,
    bodyType: randomBodyType,
    colorPalette: palette,
    confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
  };
};

export const getColorSeasonDescription = (season: string): string => {
  const descriptions: { [key: string]: string } = {
    'primavera clara': 'Você tem uma beleza delicada com tons suaves e luminosos',
    'primavera quente': 'Sua pele tem tons dourados que harmonizam com cores vibrantes',
    'primavera viva': 'Você brilha com cores intensas e cheias de energia',
    'verão claro': 'Sua beleza é serena com tons frios e suaves',
    'verão frio': 'Você tem contraste natural que combina com cores intensas e frias',
    'verão suave': 'Sua elegância natural harmoniza com tons neutros e suaves',
    'outono escuro': 'Você tem uma beleza rica que combina com tons profundos e terrosos',
    'outono quente': 'Sua pele dourada brilha com cores quentes e intensas',
    'outono suave': 'Você tem uma beleza natural que harmoniza com tons amadeirados',
    'inverno escuro': 'Você tem contraste dramático que funciona com cores profundas',
    'inverno frio': 'Sua beleza é marcante com tons puros e intensos',
    'inverno vivo': 'Você brilha com cores vibrantes e contrastantes'
  };
  return descriptions[season] || 'Sua paleta de cores é única e especial';
};
