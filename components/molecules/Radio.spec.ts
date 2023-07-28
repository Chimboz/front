// @vitest-environment nuxt
import { describe, it, expect } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import Radio from './Radio.vue';

describe('Radio', () => {
  it('renders properly', async () => {
    const wrapper = await mountSuspended(Radio, { props: { src: 'test.mp3' } });
    expect(wrapper.text()).toBe('Chaparadio');
    expect(wrapper.classes()).toContain('yellow');
  });
});
