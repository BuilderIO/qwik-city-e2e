import { component$, useStore } from '@builder.io/qwik';
import { isBrowser, isDev, isServer } from '@builder.io/qwik/build';
import styles from './example.module.css';
import ImageJpeg from '../../assets/test.jpeg?jsx';
import ImageSvg from '../../assets/qwik-logo.svg?jsx';

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: 0,
  });

  return (
    <div class={styles.example}>
      <ImageJpeg id="image-jpeg" />
      <ImageSvg id="image-svg" />

      <span>Count:{state.counter}</span>
      <div class="icon">Flag: {props.flag ? '⭐' : '💣'}</div>
      <button class="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
      <div id='is-browser'>isBrowser: {String(isBrowser)}</div>
      <div id='is-server'>isServer: {String(isServer)}</div>
      <div id='is-dev'>isDev: {String(isDev)}</div>
    </div>
  );
});
