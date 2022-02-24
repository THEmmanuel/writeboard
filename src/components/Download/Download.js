export const download = () => {
    const canvas = document.getElementById('canvas');
    const url = canvas.toDataURL('image/png');

    fetch(url)
        .then(res => {
            res.blob()
                .then(blob => {
                    let url = window.url.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'writeboard-image.png';
                    a.click();
                });
        });
};