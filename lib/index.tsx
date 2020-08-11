import { defineComponent, PropType } from 'vue'

const Props = {
  obj: {
    type: Object as PropType<{ name: string }>,
    required: true,
  },
}

const Comp = defineComponent({
  props: Props,
  setup(props) {
    return () => <div>{props.obj.name}</div>
  },
})
