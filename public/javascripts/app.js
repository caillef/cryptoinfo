const deleteCrypto = (name) => {
    const blob = new Blob([JSON.stringify({name}, null, 2)], {type : 'application/json'});
    fetch('/crypto', {
        method: 'DELETE',
        body: blob
      })
    .then(() => {
        document.location.reload();
    });
}