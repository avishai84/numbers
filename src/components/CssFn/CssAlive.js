
const part = (min, offset) => Math.random() * offset + min;
const style = document.documentElement.style;

export const changeEasing = (dificulty) => {
//Change the four points of the cubic-bezier to up the non-linear ante
      const level = 3 * dificulty;
      style.setProperty('--cubic1-1', part(Math.random() * .8, Math.random() * .5));
      style.setProperty('--cubic1-2', part(Math.random() * .12, Math.random()*.2));
      style.setProperty('--cubic1-3', part(Math.random() * .35, Math.random() *.25));
      style.setProperty('--cubic1-4', part(Math.random() * 0.91, Math.random() *.25));
      style.setProperty('--translation', Math.random() * level+'rem');
      style.setProperty('--translation-a', Math.random() * level+'rem');
      style.setProperty('--translation-b', Math.random() * level+'rem');
      style.setProperty('--translation-c', Math.random() * level+'rem');
      style.setProperty('--translation-d', Math.random() * level+'rem');
      style.setProperty('--translation-e', Math.random() * level+'rem');
      style.setProperty('--translation-f', Math.random() * level+'rem');
      style.setProperty('--translation-g', Math.random() * level+'rem');
      style.setProperty('--translation-h', Math.random() * level+'rem');
      style.setProperty('--translation-i', Math.random() * level+'rem');
      style.setProperty('--translation-j', Math.random() * level+'rem');
      style.setProperty('--translation-k', Math.random() * level+'rem');
      style.setProperty('--translation-l', Math.random() * level+'rem');
      style.setProperty('--translation-m', Math.random() * level+'rem');
      style.setProperty('--translation-n', Math.random() * level+'rem');
      style.setProperty('--translation-o', Math.random() * level+'rem');
      style.setProperty('--translation-p', Math.random() * level+'rem');
      style.setProperty('--translation-q', Math.random() * level+'rem');
      style.setProperty('--translation-r', Math.random() * level+'rem');
      style.setProperty('--translation-s', Math.random() * level+'rem');
      style.setProperty('--translation-t', Math.random() * level+'rem');
      style.setProperty('--translation-u', Math.random() * level+'rem');
};
   