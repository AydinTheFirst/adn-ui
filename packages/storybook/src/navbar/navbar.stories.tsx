import type { Meta, StoryObj } from "@storybook/react";

import { Button, Link, Navbar } from "@adn-ui/react";

const meta: Meta<typeof Navbar> = {
  args: {
    children: "This is a navbar text.",
  },
  component: Navbar,
  title: "Components/Navbar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Navbar.Container>
        <Navbar.Content className='justify-start'>
          <Navbar.Toggle />
          Navbar Content
        </Navbar.Content>
        <Navbar.Content className='hidden justify-center md:flex'>
          <Navbar.Item>
            <Link href='#'>Home</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link href='#'>About</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link href='#'>Contact</Link>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content className='justify-end'>
          <Button variant='secondary'>Log In</Button>
          <Button
            className='hidden md:inline-flex'
            variant='primary'
          >
            Sign Up
          </Button>
        </Navbar.Content>
      </Navbar.Container>
      <Navbar.Menu position='bottom'>
        <Navbar.MenuContent>
          <div className='flex items-center justify-between px-3 py-2'>
            <span className='text-lg font-semibold'>Menu</span>
          </div>
          <ul>
            <li>
              <Link
                className='block w-full px-3 py-2'
                href='#'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='block w-full px-3 py-2'
                href='#'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='block w-full px-3 py-2'
                href='#'
              >
                Contact
              </Link>
            </li>
            <li className='flex items-center'>
              <Button
                className='w-full'
                variant='secondary'
              >
                Log In
              </Button>
              <Button
                className='ml-2 w-full'
                variant='primary'
              >
                Sign Up
              </Button>
            </li>
          </ul>
        </Navbar.MenuContent>
      </Navbar.Menu>
    </Navbar>
  ),
};
