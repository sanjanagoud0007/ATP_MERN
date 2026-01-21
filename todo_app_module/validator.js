
export { validateTitle, validatePriority, validateDueDate };

//validate task title
function validateTitle(title) {
    if (title.length != 0 && title.length >= 3) {
        return true;
    }
    return false;
}

function validatePriority(priority) {
    if (priority === "low" || priority === "medium" || priority === "high") {
        return true;
    }
    else {
        return false;
    }

}

function validateDueDate(dueDate) {
    if(new Date(dueDate) > new Date()){ 
        return true;
    }
    else{
        return false;
    }
}