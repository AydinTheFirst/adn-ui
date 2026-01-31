import type { Meta, StoryObj } from "@storybook/react-vite";

import { buttonVariants, Dialog } from "@adn-ui/react";

const meta: Meta<typeof Dialog> = {
  args: {
    children: "This is a dialog text.",
  },
  component: Dialog,
  title: "Components/Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger className={buttonVariants()}>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Close />
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is the description of the dialog.</Dialog.Description>
          <p className='my-4'>
            This is an example of a dialog component using the ADN UI library. It showcases the
            dialog's title, description, and content.
          </p>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
