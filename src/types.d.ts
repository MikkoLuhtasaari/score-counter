declare global {

  module General {
    interface Sports {
      title: string,
      shortTitle?: string,
      description: string,
      link: string
    }
    interface ToKoLevels {
      title: string,
      description: string,
      link: string
    }
    interface ToKoAlokasScores {
      name: string,
      multiplier: number
    }
  }
}