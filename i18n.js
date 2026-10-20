window.FRIENDSPHERE_LANGUAGE = {
  resolve(supportedLanguages) {
    const savedLanguage = localStorage.getItem('friendsphere_language');

    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }

    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    for (const locale of browserLanguages) {
      const language = locale.toLowerCase().split('-')[0];

      if (supportedLanguages.includes(language)) {
        return language;
      }
    }

    return 'en';
  },
};

window.FRIENDSPHERE_TRANSLATIONS = {
  root: {
    de: {
      brand: 'Friendsphere.app',
      subtitle: 'Wir entwickeln Apps, die Menschen miteinander verbinden.',
      explore: 'Apps entdecken',
      learn: 'Mehr erfahren',
      libraryTitle: 'Apps entdecken',
      librarySubtitle: 'Entdecke Apps für echte Verbindungen.',
      navApps: 'Apps',
      navSocials: 'Socials',
      navContact: 'Kontakt',
      navSupport: 'Support',
      dropdownAppName: 'Weird oder Normal',
      modalAppName: 'Weird oder Normal',
      modalTagline: 'Lustige Fragen. Ehrliche Antworten.',
      modalDescription: 'Ein Spiel, das Freunde mit unerwarteten Fragen und echten Gesprächen näher zusammenbringt.',
      downloadOn: 'Laden im',
      getItOn: 'Erhältlich bei',
      comingSoonSmall: 'Demnächst',
      privacy: 'Datenschutzerklärung',
      feature1Title: 'Fragen',
      feature1Text: 'Hunderte ungewöhnliche Fragen.',
      feature2Title: 'Verbinden',
      feature2Text: 'Lerne deine Freunde besser kennen.',
      feature3Title: 'Spaß haben',
      feature3Text: 'Ehrliche Antworten machen es echt.',
      tripsphereTagline: 'Finde Reisebegleiter. Reist zusammen.',
      tripsphereDescription: 'Eine Reise-App, um Menschen kennenzulernen, die Trips, Routen und praktische Reisetipps teilen möchten.',
      tripsphereFeature1Title: 'Finden',
      tripsphereFeature1Text: 'Finde Menschen für gemeinsame Reisen.',
      tripsphereFeature2Title: 'Reisen',
      tripsphereFeature2Text: 'Plant Routen zusammen.',
      tripsphereFeature3Title: 'Tipps',
      tripsphereFeature3Text: 'Tauscht praktische Tipps aus.',
      aboutTitle: 'Über Friendsphere.app',
      aboutKicker: 'Warum Friendsphere',
      aboutText: 'Soziale Netzwerke und Apps wurden ursprünglich entwickelt, damit Menschen einander finden können. Mit der Zeit hat sich vieles verändert: Immer öfter besteht ihr Hauptziel darin, uns möglichst lange vor den Bildschirmen unserer Smartphones und Computer zu halten.',
      aboutParagraph2: 'Friendsphere.app entstand aus einer anderen Idee: Apps zu entwickeln, die Menschen mit ähnlichen Interessen zusammenbringen - nicht nur zum Schreiben, sondern für echte Begegnungen, gemeinsame Ideen, Reisen und Erlebnisse.',
      aboutParagraph3: 'Die Welt verlagert sich immer mehr ins Virtuelle. Ich möchte darin mehr Raum für das echte Leben lassen.',
      aboutThanks: 'Danke, dass du das Projekt unterstützt. Das bedeutet mir wirklich viel.'
    },
    es: {
      brand: 'Friendsphere.app',
      subtitle: 'Creamos apps que ayudan a las personas a conectar.',
      explore: 'Explorar apps',
      learn: 'Saber más',
      libraryTitle: 'Explorar apps',
      librarySubtitle: 'Descubre apps creadas para conectar de verdad.',
      navApps: 'Apps',
      navSocials: 'Redes',
      navContact: 'Contacto',
      navSupport: 'Soporte',
      dropdownAppName: 'Raro o normal',
      modalAppName: 'Raro o normal',
      modalTagline: 'Preguntas divertidas. Respuestas sinceras.',
      modalDescription: 'Un juego que acerca a los amigos con preguntas inesperadas y conversaciones reales.',
      downloadOn: 'Descárgalo en',
      getItOn: 'Disponible en',
      comingSoonSmall: 'Próximamente',
      privacy: 'Política de privacidad',
      feature1Title: 'Pregunta',
      feature1Text: 'Cientos de preguntas poco comunes.',
      feature2Title: 'Conecta',
      feature2Text: 'Conoce mejor a tus amigos.',
      feature3Title: 'Diviértete',
      feature3Text: 'Las respuestas sinceras lo hacen real.',
      tripsphereTagline: 'Encuentra compañeros de viaje. Viajen juntos.',
      tripsphereDescription: 'Una app de viajes para conocer personas que quieren compartir viajes, rutas y consejos prácticos.',
      tripsphereFeature1Title: 'Conecta',
      tripsphereFeature1Text: 'Encuentra personas para viajes compartidos.',
      tripsphereFeature2Title: 'Viaja',
      tripsphereFeature2Text: 'Planeen rutas juntos.',
      tripsphereFeature3Title: 'Consejos',
      tripsphereFeature3Text: 'Intercambien consejos prácticos.',
      aboutTitle: 'Sobre Friendsphere.app',
      aboutKicker: 'Por qué Friendsphere',
      aboutText: 'Las redes sociales y las apps se crearon originalmente para ayudar a las personas a encontrarse. Con el tiempo, muchas cosas han cambiado: cada vez más, su objetivo principal es mantenernos frente a las pantallas de nuestros teléfonos y ordenadores el mayor tiempo posible.',
      aboutParagraph2: 'Friendsphere.app nació de una idea diferente: crear apps que ayuden a las personas a encontrar a otras con intereses afines, no solo para conversar, sino para encuentros reales, ideas compartidas, viajes y experiencias.',
      aboutParagraph3: 'El mundo se traslada cada vez más a lo virtual. Quiero dejar en él más espacio para la vida real.',
      aboutThanks: 'Gracias por apoyar el proyecto. Para mí significa mucho.'
    },
    ja: {
      brand: 'Friendsphere.app',
      subtitle: '人と人をつなぐアプリをつくっています。',
      explore: 'アプリを見る',
      learn: '詳しく見る',
      libraryTitle: 'アプリを見る',
      librarySubtitle: '本当のつながりのためにつくられたアプリを見つけよう。',
      navApps: 'アプリ',
      navSocials: 'ソーシャル',
      navContact: 'お問い合わせ',
      navSupport: 'サポート',
      dropdownAppName: '変？それとも普通？',
      modalAppName: '変？それとも普通？',
      modalTagline: '楽しい質問。正直な答え。',
      modalDescription: '意外な質問と本音の会話で、友だちとの距離を縮めるゲームです。',
      downloadOn: 'ダウンロード：',
      getItOn: '入手先：',
      comingSoonSmall: '近日公開',
      privacy: 'プライバシーポリシー',
      feature1Title: '質問する',
      feature1Text: 'ちょっと変わった質問がたくさん。',
      feature2Title: 'つながる',
      feature2Text: '友だちのことをもっと知ろう。',
      feature3Title: '楽しむ',
      feature3Text: '正直な答えが、会話を本物にする。',
      tripsphereTagline: '旅仲間を見つけよう。一緒に出かけよう。',
      tripsphereDescription: '旅やルート、実用的なヒントを共有したい人と出会える旅行アプリです。',
      tripsphereFeature1Title: '出会う',
      tripsphereFeature1Text: '一緒に旅をする人を見つけよう。',
      tripsphereFeature2Title: '旅する',
      tripsphereFeature2Text: '一緒にルートをつくろう。',
      tripsphereFeature3Title: 'ヒント',
      tripsphereFeature3Text: '役立つ旅のヒントを交換しよう。',
      aboutTitle: 'Friendsphere.app について',
      aboutKicker: 'Friendsphereの想い',
      aboutText: 'ソーシャルネットワークやアプリは、もともと人と人が出会うためにつくられました。時がたつにつれ、多くのことが変わりました。今では、スマートフォンやコンピューターの画面の前にできるだけ長く留めることが主な目的になりつつあります。',
      aboutParagraph2: 'Friendsphere.appは、別の考えから生まれました。同じ興味を持つ人と出会えるアプリをつくること。チャットのためだけでなく、実際に会うこと、アイデアを共有すること、旅や体験のために。',
      aboutParagraph3: '世界はますますバーチャルな空間へ向かっています。その中に、現実の暮らしのための場所をもっと残したいと思っています。',
      aboutThanks: 'プロジェクトを支えてくださり、ありがとうございます。本当に大切に思っています。'
    }
  },
  tripsphere: {
    de: {
      title: 'Tripsphere',
      appName: 'Tripsphere',
      tagline: 'Finde Reisebegleiter. Reist zusammen. Teilt lokale Tipps.',
      description: 'Tripsphere hilft Reisenden, Menschen mit derselben Richtung kennenzulernen, gemeinsame Reisen zu planen und unterwegs praktische Tipps auszutauschen.',
      feature1Title: 'Finden',
      feature1Text: 'Finde Menschen, die in dieselbe Richtung reisen möchten.',
      feature2Title: 'Zusammen reisen',
      feature2Text: 'Schließe dich gemeinsamen Trips an und plane Routen mit passenden Reisebegleitern.',
      feature3Title: 'Tipps teilen',
      feature3Text: 'Tausche praktische Tipps vor und während der Reise aus.',
      downloadOn: 'Laden im',
      getItOn: 'Erhältlich bei',
      privacy: 'Datenschutzerklärung'
    },
    es: {
      title: 'Tripsphere',
      appName: 'Tripsphere',
      tagline: 'Encuentra compañeros de viaje. Viajen juntos. Comparte consejos locales.',
      description: 'Tripsphere ayuda a los viajeros a conocer personas que van en la misma dirección, unirse a viajes compartidos e intercambiar consejos prácticos durante el camino.',
      feature1Title: 'Conecta',
      feature1Text: 'Encuentra personas que quieren viajar en la misma dirección.',
      feature2Title: 'Viajen juntos',
      feature2Text: 'Únete a viajes compartidos y crea rutas con viajeros afines.',
      feature3Title: 'Comparte consejos',
      feature3Text: 'Intercambia consejos prácticos antes y durante el viaje.',
      downloadOn: 'Descárgalo en',
      getItOn: 'Disponible en',
      privacy: 'Política de privacidad'
    },
    ja: {
      title: 'Tripsphere',
      appName: 'Tripsphere',
      tagline: '旅仲間を見つけよう。一緒に出かけよう。現地のヒントを共有しよう。',
      description: 'Tripsphereは、同じ方向へ向かう人と出会い、旅を共有しながら実用的なヒントを交換できる旅行アプリです。',
      feature1Title: '出会う',
      feature1Text: '同じ方向へ旅したい人を見つけよう。',
      feature2Title: '一緒に旅する',
      feature2Text: '旅を共有し、気の合う旅仲間とルートを始めよう。',
      feature3Title: 'ヒントを共有',
      feature3Text: '旅の前も途中も、役立つヒントを交換しよう。',
      downloadOn: 'ダウンロード：',
      getItOn: '入手先：',
      privacy: 'プライバシーポリシー'
    }
  },
  weirdOrNormal: {
    de: {
      title: 'Weird oder Normal',
      appName: 'Weird oder Normal',
      tagline: 'Lustige Fragen. Ehrliche Antworten.',
      description: 'Ein soziales Fragespiel, in dem Menschen abstimmen, Meinungen vergleichen und entdecken, was andere seltsam oder ganz normal finden.',
      feature1Title: 'Fragen',
      feature1Text: 'Erstelle eigene Fragen und sieh, was andere denken.',
      feature2Title: 'Abstimmen',
      feature2Text: 'Teile deine Meinung und vergleiche sie mit der Community.',
      feature3Title: 'Diskutieren',
      feature3Text: 'Lies Kommentare und nimm an echten Gesprächen teil.',
      downloadOn: 'Laden im',
      getItOn: 'Erhältlich bei',
      privacy: 'Datenschutzerklärung'
    },
    es: {
      title: 'Raro o normal',
      appName: 'Raro o normal',
      tagline: 'Preguntas divertidas. Respuestas sinceras.',
      description: 'Un juego social de preguntas donde las personas votan, comparan opiniones y descubren qué consideran raro o totalmente normal los demás.',
      feature1Title: 'Pregunta',
      feature1Text: 'Crea tus propias preguntas y descubre qué piensa la gente.',
      feature2Title: 'Vota',
      feature2Text: 'Comparte tu opinión y compárala con la comunidad.',
      feature3Title: 'Comenta',
      feature3Text: 'Lee comentarios y únete a conversaciones reales.',
      downloadOn: 'Descárgalo en',
      getItOn: 'Disponible en',
      privacy: 'Política de privacidad'
    },
    ja: {
      title: '変？それとも普通？',
      appName: '変？それとも普通？',
      tagline: '楽しい質問。正直な答え。',
      description: '投票や意見の比較を通して、ほかの人が何を変だと思い、何を普通だと思うのかを知るソーシャル質問ゲームです。',
      feature1Title: '質問する',
      feature1Text: '自分だけの質問をつくり、みんなの考えを見てみよう。',
      feature2Title: '投票する',
      feature2Text: '自分の意見を共有し、コミュニティと比べよう。',
      feature3Title: '話す',
      feature3Text: 'コメントを読んで、本当の会話に加わろう。',
      downloadOn: 'ダウンロード：',
      getItOn: '入手先：',
      privacy: 'プライバシーポリシー'
    }
  }
};
