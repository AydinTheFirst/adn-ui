import type { Meta, StoryObj } from "@storybook/react";

import { Field, Button } from "@adn-ui/react";
import { LucideUser } from "lucide-react";

const meta: Meta<typeof Field> = {
  component: Field,
  title: "Components/Field",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return <div className="flex h-screen flex-col items-center justify-center">{children}</div>;
}

export const Default: Story = {
  render: (args) => (
    <Container>
      <Field.Root {...args}>
        <Field.Label>Username</Field.Label>
        <Field.Control placeholder="Enter your username" />
        <Field.Description>This is a description text.</Field.Description>
        <Field.Error />
      </Field.Root>
    </Container>
  ),
};

export const WithGroup: Story = {
  render: (args) => (
    <Container>
      <Field.Root {...args}>
        <Field.Label>Options</Field.Label>
        <Field.Group>
          <Button variant="field">
            <LucideUser />
          </Button>
          <Field.Control placeholder="Enter your username" />
          <Button variant="field">
            <LucideUser />
          </Button>
        </Field.Group>
        <Field.Description>Select one or more options.</Field.Description>
        <Field.Error />
      </Field.Root>
    </Container>
  ),
};
