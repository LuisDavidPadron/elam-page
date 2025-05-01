export default function TextInput() {
  return (
    <div>
      <label
        htmlFor="default-input"
        className="mb-2.5 block text-base font-medium text-dark dark:text-white"
      >
        Name
      </label>
      <input
        type="text"
        name="default-input"
        placeholder="Enter you full name"
        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-dark-6 outline-hidden focus:border-primary dark:border-dark-3 dark:text-white dark:placeholder-dark-5"
      />
    </div>
  );
}
