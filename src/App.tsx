import Final from "./final";
import Exercise from "./exercise";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <div className="flex flex-row justify-evenly items-center w-5/12">
        <Solution>
          <p className="font-bold mb-12">Current state</p>
          <Exercise />
        </Solution>
        <Solution>
          <p className="font-bold mb-12">Desired state</p>
          <Final />
        </Solution>
      </div>
    </div>
  );
}

function Solution({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div className="border-2 border-slate-800 rounded-md p-5 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default App;
