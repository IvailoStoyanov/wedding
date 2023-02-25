
export default function FormSuccessNo() {
  return (
    <form
      name="declined"
      action="/declined"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
    >
      <input type="hidden" name="form-name" value="declined" />

      <label htmlFor="name">Имена</label>
      <input type="text" id="name" name="name" required />

      <div>

        <label htmlFor="message">Съобщение</label>
        <textarea name="message" required></textarea>
        <input
          type="submit"
          value="Send form"
          name="submit"
        ></input>
      </div>
    </form>
  );
}
