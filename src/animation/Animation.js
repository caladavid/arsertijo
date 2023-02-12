export const TransAnimation = {
    initial: {
        height: "100%",
        bottom: 0,
        
      },
      animate: {
        height: 0,
        transition: {
          when: "afterChildren",
          duration: 1.5,
          ease: [0.87, 0, 0.13, 1],
        },
      },
}

export const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

export const containerText = {
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 1.5,

    }
  }
};

export const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
};

export const navHamburguerItem = {
  exit:{
    opacity: 0,
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      delay: 0.9
    }
  }
}