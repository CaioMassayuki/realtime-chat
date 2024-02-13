import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactsList from "./ContactsList";
import { MOCK_CONTACTS } from "../../livechat";

describe("<ContactList> Component", () => {
  const user = userEvent.setup();
  it("Should receive a list of Contacts and render all of them", () => {
    const { getByText } = render(<ContactsList contacts={MOCK_CONTACTS} />);
    MOCK_CONTACTS.forEach((contact) => {
      const textWithUser = getByText(contact.user);
      expect(textWithUser).toBeInTheDocument();
    });
  });
  it("Should filter the Contact list on input change", async () => {
    const { getByText, getByPlaceholderText } = render(
      <ContactsList contacts={MOCK_CONTACTS} />
    );
    const searchInput = getByPlaceholderText("Search");
    const searchedUser = getByText(MOCK_CONTACTS[0].user)
    const nonSearchedUser = getByText(MOCK_CONTACTS[1].user)

    expect(nonSearchedUser).toBeInTheDocument()
    await user.type(searchInput, MOCK_CONTACTS[0].user);

    expect(searchedUser).toBeInTheDocument()
    expect(searchedUser).toBeInTheDocument()
    expect(nonSearchedUser).not.toBeInTheDocument()
    expect(nonSearchedUser).not.toBeInTheDocument()
  });
});
