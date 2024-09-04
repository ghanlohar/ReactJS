import * as router from "react-router-dom";
...
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
...
const useParamsSpy = jest.spyOn(router, "useParams");

describe("CaseDetailsTab", () => {
  it("match snapshot", () => {
    useParamsSpy.mockReturnValue({
      param: "param"
    });
    const { container } = render(<TestComponent/>);
    expect(container).toMatchSnapshot();
  });
  it("renders role tab", () => {
    useParamsSpy.mockReturnValue({
      param: "UpdatedParam"
    });
    const { container } = render(<TestComponent/>);
    expect(container).toMatchSnapshot();
  });
});
