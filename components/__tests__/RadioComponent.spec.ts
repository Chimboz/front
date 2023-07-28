import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Radio from '../RadioComponent.vue';

describe('Radio', () => {
  it('renders properly', () => {
    const wrapper = mount(Radio, { props: { src: 'track.mp3' } });
    expect(wrapper.classes()).toContain('yellow');
  });
});
