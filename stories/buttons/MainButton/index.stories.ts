import MainButton from "@/app/components/buttons/MainButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainButton> = {
  component: MainButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainButton>;

export const TextMdPrimary: Story = {
  args: {
    text: "text",
    size: "md",
    type: "primary",
  },
};

export const TextMdLightSecondary: Story = {
  args: {
    text: "text",
    size: "md",
    type: "light-secondary",
  },
};
