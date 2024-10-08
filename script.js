
        document.getElementById('scheduleForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            const workingDays = Array.from(document.querySelectorAll('input[name="workingDays"]:checked'))
                .map(checkbox => checkbox.value);

            const formData = {
                startDate,
                endDate,
                workingDays
            };

            console.log('Form Data:', formData);

           
            alert('Schedule data collected. In a real application, this would be sent to a server to generate an Excel file.');

          
        });
    
