export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      when: "beforeChildren",
      staggerChildren: .5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .5
    }
  }
}

export const introAnimation = {
  hidden: { x: 200 },
  show: { x: 0, transition: { duration: 1.25, ease: "easeOut", staggerChildren: 0.5 }}
}

export const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 }}
}

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1.5 },
  },
};

export const buttonFadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2 },
  },
};

export const imageAnimation = {
  hidden: { scale: .5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { 
      ease: "easeOut",
      duration: 1.25 
    }
  }
}

export const screenshotAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { 
      ease: "easeOut",
      duration: 1
    }
  }
}

export const dividerAnimation = {
  hidden: {
    width: "0%"
  },
  show: {
    width: "100%",
    transition: { duration: 1 }
  }
}

export const sliderAnimation = {
  hidden: { x: '-130%', skew: '45deg'},
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 }
  }
}

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } }
}