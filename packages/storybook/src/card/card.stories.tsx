import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Card, cardVariants } from "@adn-ui/react";

const meta: Meta<typeof Card> = {
  args: {
    children: "This is a card text.",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: Object.keys(cardVariants.variants.variant),
    },
  },
  component: Card,
  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
        <p>
          This is an example of a card component using the ADN UI library. It showcases the card's
          header, content, and actions.
        </p>
      </Card.Header>
      <Card.Content></Card.Content>
      <Card.Content className='flex justify-end'>
        <Button variant='danger'>Cancel</Button>
      </Card.Content>
    </Card>
  ),
};
