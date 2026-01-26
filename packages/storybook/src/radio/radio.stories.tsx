import type { Meta, StoryObj } from "@storybook/react";

import { Label, Radio, RadioGroup } from "@adn-ui/react";
import { useId } from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const Default: Story = {
  render: (args) => {
    const id = useId();

    return (
      <RadioGroup
        aria-labelledby={id}
        defaultValue={"option1"}
      >
        {items.map((item) => (
          <Label key={item.value}>
            <Radio.Root
              {...args}
              value={item.value}
            >
              <Radio.Indicator />
            </Radio.Root>
            {item.label}
          </Label>
        ))}
      </RadioGroup>
    );
  },
};
