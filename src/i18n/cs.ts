export const csTranslations = {
  header: {
    title: 'Portfolio Datové Analýzy',
    subtitle: 'Jan Štrosser'
  },
  hero: {
    title: 'Datově Poznatky a Analýzy',
    subtitle: 'Zkoumání datových sad pomocí základních analytických nástrojů a vizualizačních technik.'
  },
  projects: {
    marketBasket: {
      title: 'Analýza prodejů kávy',
      description: 'Analýza datasetu o prodeji kávy.',
      fullDescription: 'Analýza prodejních dat kávy pro identifikaci klíčových trendů a zlepšení obchodních strategií. Tento projekt využívá analytické nástroje v Excelu, včetně kontingenčních tabulek, pokročilých funkcí jako XLOOKUP a INDEX, pro podrobné zkoumání zákaznického chování a preferencí produktů. Výsledkem je identifikace trendů v prodeji a návrhy na optimalizaci skladových zásob a propagačních kampaní.',
      methodology: [
        'Čištění a příprava dat: Odstranění duplikátů a přidání požadovaných hodnot.',
        'Použití vzorce INDEX pro dynamické vykreslení hodnot z různých listů',
        'Vytvořené kontingenční tabulky pro zodpovězení klíčové otázky pomocí slicerů a časových os',
        'Interaktivní vizualizační panel pro ovládání všech grafů'
      ]
    },
    timeSeries: {
      title: 'Analýza zpožděných letů',
      description: 'Analýza datasetu o zpožděních letů pro zlepšení provozních strategií v letecké dopravě.',
      fullDescription: 'Projekt se zaměřuje na vizualizaci a analýzu zpožděných letů pomocí Power BI. Cílem projektu je identifikovat hlavní příčiny zpoždění a analyzovat jejich dopad na celkový provoz. Pomocí pokročilých analytických funkcí Power BI, včetně DAX výpočtů a interaktivních filtrů, dashboard poskytuje přehled o trendech a vzorcích v datech a umožňuje optimalizaci provozu a strategické plánování.',
      methodology: [
        'Čištění a příprava dat: Úprava datasetu, odstranění chybějících hodnot a nastavení datových typů.',
        'Použití DAX funkcí pro výpočty související s průměrnou dobou zpoždění, počtem zpožděných letů a jejich rozdělením podle příčin.',
        'Vytvoření interaktivních vizualizací, které zahrnují geografické mapy, sloupcové grafy a časové řady pro lepší pochopení trendů.',
        'Implementace filtrů a slicerů pro interaktivní analýzu, která umožňuje uživatelům zkoumat zpoždění podle letišť, aerolinek, času a dalších kategorií.'
      ]
    }
  },
  common: {
    liveDemo: 'Živá Ukázka',
    viewCode: 'Zobrazit Kód',
    keyInsights: 'Klíčové Poznatky',
    methodology: 'Metodologie'
  }
};