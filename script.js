
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

            // Here you would typically send this data to your server
            // For demonstration, we'll just show an alert
            alert('Schedule data collected. In a real application, this would be sent to a server to generate an Excel file.');

            // If you had a server endpoint, you might do something like this:
            /*
            fetch('/api/generate-schedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'professor_schedule.xlsx';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while generating the schedule.');
            });
            */
        });
    