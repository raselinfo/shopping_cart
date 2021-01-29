function handlaProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount += 1;
    }
    if (isIncrease == false && productNewCount > 0) {
        productNewCount -= 1;
    }
    document.getElementById(product + "__count").value = productNewCount;

    const productTotal = getProductTotal(product, productNewCount);

    document.getElementById(product + "__total").innerText = "$" + productTotal;

    calculateTotal()

}


// Product input value function
function getInputValue(product) {
    const productInput = document.getElementById(product + "__count");
    const productCount = parseInt(productInput.value);

    return productCount;
}


// Product total function
function getProductTotal(product, productCount) {
    if (product == "phone") {
        return productCount * 1219;
    }
    if (product == "case") {
        return productCount * 59;
    }
    if (product == "glase") {
        return productCount * 70;
    }
}


// Calculate total function
function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");
    const glassCount = getInputValue("glase");
    // Total
    const total = getProductTotal("phone", phoneCount) + getProductTotal("case", caseCount) + getProductTotal("glase", glassCount);
    // SubTotal
    document.getElementById("sub__total").innerText ="$"+total;

    // Tax
    const tax = Math.ceil((total*5)/100);
    document.getElementById("tax").innerText="$"+tax;
  
    // Grand Total
    const grandTotal = total + tax;
    document.getElementById("grand").innerText = grandTotal;
   
}

