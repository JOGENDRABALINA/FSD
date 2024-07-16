var test = 1;
var table; 

function addData() {
    if (test == 1) {
        test = 2;
        table = document.createElement("table"); 
        table.className = "datatable";

        table.style.border="2px solid black";
        table.style.borderCollapse="collapse";
        
    
        var row = document.createElement("tr");

        row.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        row.style.fontFamily="sansarif";
        row.style.fontSize="24px";
        row.style.fontWeight="900px";
        row.style.backgroundImage= "linear-gradient( 90.5deg,  rgba(152,45,255,1) 0.7%, rgba(90,241,255,1) 51.5%, rgba(65,239,164,1) 100.6% )";
        var Student_Name = document.createElement("th");
        Student_Name.textContent = "NAME";
        row.appendChild(Student_Name);

        Student_Name.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        Student_Name.style.padding="10px";

        var Student_Roll = document.createElement("th");
        Student_Roll.textContent = "ROLL NO";
        row.appendChild(Student_Roll);

        Student_Roll.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        Student_Roll.style.padding="10px";

        var Student_Dept = document.createElement("th");
        Student_Dept.textContent = "DEPARTMENT";
        row.appendChild(Student_Dept);

        Student_Dept.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        Student_Dept.style.padding="10px";

        var Student_CGPA = document.createElement("th");
        Student_CGPA.textContent = "CGPA";
        row.appendChild(Student_CGPA);

        Student_CGPA.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        Student_CGPA.style.padding="10px";

        var Update_Details = document.createElement("th");
        Update_Details.textContent = "UPDATE";
        row.appendChild(Update_Details);

        Update_Details.style.border="2px solid black";
        row.style.borderCollapse="collapse";
        Update_Details.style.padding="10px";

        var Delete_Data = document.createElement("th");
        Delete_Data.textContent = "DELETE";
        row.appendChild(Delete_Data);

        Delete_Data.style.border="2px solid black";
        row.style.border=borderCollapse="collapse";
        Delete_Data.style.padding="10px";
        
        table.appendChild(row);
        document.body.appendChild(table);


    } else {
        var name = prompt("Enter NAME:");
        var rollNo = prompt("Enter ROLL NO:");
        var department = prompt("Enter DEPARTMENT:");
        var cgpa = prompt("Enter CGPA:");

        var newRow = document.createElement("tr");

        newRow.style.border="2px solid black";
        newRow.style.borderCollapse="collapse";
        newRow.style.fontFamily="sansarif";
        newRow.style.fontSize="22px";
        newRow.style.fontWeight="900px";
        newRow.style.backgroundImage="radial-gradient( circle farthest-corner at 50.7% 54%,  rgba(204,254,152,1) 0%, rgba(229,253,190,1) 92.4% )";
        newRow.style.padding="10px";
        newRow.style.textAlign="center";
        newRow.style.hover="center";
    
        var nameCell = document.createElement("td");
        nameCell.textContent = name;

        nameCell.style.border="2px solid black";
        nameCell.style.borderCollapse="collapse";
        nameCell.style.fontFamily="sansarif";
        nameCell.style.fontSize="22px";
        nameCell.style.fontWeight="900px";
        //nameCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";
        nameCell.style.padding="10px";
        nameCell.style.textAlign="center";

        var rollNoCell = document.createElement("td");
        rollNoCell.textContent = rollNo;

        rollNoCell.style.border="2px solid black";
        rollNoCell.style.borderCollapse="collapse";
        rollNoCell.style.fontFamily="sansarif";
        rollNoCell.style.fontSize="22px";
        rollNoCell.style.fontWeight="900px";
        //rollNoCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";

        var departmentCell = document.createElement("td");
        departmentCell.textContent = department;

        departmentCell.style.border="2px solid black";
        departmentCell.style.borderCollapse="collapse";
        departmentCell.style.fontFamily="sansarif";
        departmentCell.style.fontSize="22px";
        departmentCell.style.fontWeight="900px";
        //departmentCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";

        var cgpaCell = document.createElement("td");
        cgpaCell.textContent = cgpa;

        cgpaCell.style.border="2px solid black";
        cgpaCell.style.borderCollapse="collapse";
        cgpaCell.style.fontFamily="sansarif";
        cgpaCell.style.fontSize="22px";
        cgpaCell.style.fontWeight="900px";
        //cgpaCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";

        var updateCell = document.createElement("th");

        updateCell.style.border="2px solid black";
        updateCell.style.borderCollapse="collapse";
        updateCell.style.fontFamily="sansarif";
        updateCell.style.fontSize="24px";
        updateCell.style.fontWeight="900px";
        //updateCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";

        var updatebuttton = document.createElement("button");

        updatebuttton.style.fontFamily="sansarif";
        updatebuttton.style.fontSize="24px";
        updatebuttton.style.fontWeight="900px";
        updatebuttton.style.backgroundImage="linear-gradient( 110.1deg,  rgba(34,126,34,1) 2.9%, rgba(168,251,60,1) 90.3% )";
        updatebuttton.textContent = "UPDATE";
        updateCell.appendChild(updatebuttton); 
        updatebuttton.onclick = function() {
            var name = prompt("Enter new NAME:");
            var rollNo = prompt("Enter new ROLL NO:");
            var department = prompt("Enter new DEPARTMENT:");
            var cgpa = prompt("Enter new CGPA:");
        
            newRow.cells[0].textContent = name;
            newRow.cells[1].textContent = rollNo;
            newRow.cells[2].textContent = department;
            newRow.cells[3].textContent = cgpa;
        };

        var deleteCell = document.createElement("th");

        deleteCell.style.border="2px solid black";
        deleteCell.style.borderCollapse="collapse";
        deleteCell.style.fontFamily="sansarif";
        deleteCell.style.fontSize="24px";
        deleteCell.style.fontWeight="900px";
        //deleteCell.style.backgroundImage="linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% )";

        var deletebutton = document.createElement("button")

        deletebutton.style.fontFamily="sansarif";
        deletebutton.style.fontSize="24px";
        deletebutton.style.fontWeight="900px";
        deletebutton.style.backgroundImage= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )";

        deletebutton.textContent = "DELETE";
        deleteCell.appendChild(deletebutton);
        deletebutton.onclick= function() {
            var row = newRow;
            row.parentNode.removeChild(row);
        }

        newRow.appendChild(nameCell);
        newRow.appendChild(rollNoCell);
        newRow.appendChild(departmentCell);
        newRow.appendChild(cgpaCell);
        newRow.appendChild(updateCell);
        newRow.appendChild(deleteCell);
        
        table.appendChild(newRow);
    }
}