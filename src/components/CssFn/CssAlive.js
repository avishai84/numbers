export const CssAlive = {
      init : () => 'init'

};
export const hello = () => 'hello';
export const bye = () => 'bye';

const part = (min, offset) => Math.random() * offset + min;
const style = document.documentElement.style;

export const changeEasing = () => {
//Change the four points of the cubic-bezier to up the non-linear ante
console.log('style executed');
      style.setProperty('--cubic1-1', part(Math.random() * .8, Math.random() * .5));
      style.setProperty('--cubic1-2', part(Math.random() * .12, Math.random()*.2));
      style.setProperty('--cubic1-3', part(Math.random() * .35, Math.random() *.25));
      style.setProperty('--cubic1-4', part(Math.random() * 0.91, Math.random() *.25));
      style.setProperty('--translation', Math.random() * 100+'%');
      style.setProperty('--translation-a', Math.random() * 100+'%');
      style.setProperty('--translation-b', Math.random() * 100+'%');
      style.setProperty('--translation-c', Math.random() * 100+'%');
      style.setProperty('--translation-d', Math.random() * 100+'%');
      style.setProperty('--translation-e', Math.random() * 100+'%');
      style.setProperty('--translation-f', Math.random() * 100+'%');
      style.setProperty('--translation-g', Math.random() * 100+'%');
      style.setProperty('--translation-h', Math.random() * 100+'%');
      style.setProperty('--translation-i', Math.random() * 100+'%');
      style.setProperty('--translation-j', Math.random() * 100+'%');
      style.setProperty('--translation-k', Math.random() * 100+'%');
      style.setProperty('--translation-l', Math.random() * 100+'%');
};
   