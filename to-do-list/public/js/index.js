// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

  (function() {  
    let taskContent = null;
    let taskId = null;
  
    const task = document.querySelectorAll(".task");
    task.forEach((item) => {
      item.addEventListener("input", (e) => {
          taskId = e.target.id;
          taskContent = e.target.innerText;
      });
    });
  
    document.addEventListener("click", (e) => {
      if (taskId !== null && e.target.id !== taskId && taskContent !== '' && !/^[ ]*$/.test(taskContent)) {
        // sending an update request using fetch API
        const newData = {
          task: taskContent
        };
        
        fetch(`/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Update request successful');
        })
        .catch(error => {
            console.error('There was a problem with the update request:', error);
        });
        taskId = null
        taskContent = null
      }
    });
  })();
  
  

  
