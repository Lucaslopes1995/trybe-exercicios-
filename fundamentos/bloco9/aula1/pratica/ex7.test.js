const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Testando asyncSum, Uppercase', (done) => {
    uppercase("teste", (result) => {
      try {
        expect(result).toBe("TESTE");
        done();
      } catch (error) {
        done(error);
      }
    });
  });