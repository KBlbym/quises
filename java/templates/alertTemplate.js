function printAlertTemplate(content) {
    return `
    <div class="alert alert-warning d-flex align-items-center" role="alert">
    <div>
     ${content}
    </div>
  </div>`
    
}
export{printAlertTemplate}