const DownloadPDF=()=>{
    fetch('CV.pdf').then(response=>{
    response.blob().then(blob=>{
    const fileURL=window.URL.createObjectURL(blob);
    let alink=document.createElement('a'); alink.href=fileURL; alink.download='CV.pdf'; alink.click()})})
    }
    export default DownloadPDF