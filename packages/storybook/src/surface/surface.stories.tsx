import type { Meta, StoryObj } from "@storybook/react";

import { Surface } from "@adn-ui/react";

const meta: Meta<typeof Surface> = {
  title: "Components/Surface",
  component: Surface,
  args: {
    children: "This is a surface text.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
