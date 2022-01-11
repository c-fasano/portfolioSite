export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 1,
    y: 300,
    transition: {
      duration: .5
    }
  }
}

export const introAnimation = {
  hidden: { x: 200 },
  show: { x: 0, transition: { duration: 1.25, ease: "easeOut", staggerChildren: 0.35 }}
}

export const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 }}
}