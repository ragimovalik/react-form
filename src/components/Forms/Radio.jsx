const Radio = ({ handleChange, fontSize }) => {
  return (
    <div
      style={{
        width: 200,
        textAlign: 'center',
        margin: '0 auto',
        padding: 10,
        fontSize: '0.6rem',
      }}
    >
      <fieldset
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <legend> FontSize </legend>

        <label
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: 2 }}>Little</span>
          <input
            type="radio"
            value={0.8}
            name="fontSize"
            checked={fontSize === 0.8}
            onChange={handleChange}
          />
        </label>

        <label
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: 2 }}>Middle</span>
          <input
            type="radio"
            value={0.9}
            name="fontSize"
            checked={fontSize === 0.9}
            onChange={handleChange}
          />
        </label>

        <label
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: 2 }}>Large</span>
          <input
            type="radio"
            value={1}
            name="fontSize"
            checked={fontSize === 1}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default Radio;
