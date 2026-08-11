//javascript
// Signor Mechanica
// Main JavaScript


// ==========================================
// NUMBER FORMAT
// ==========================================

function formatNumber(value, decimals = 2) {

    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);

}


// ==========================================
// MECHANICS
// ==========================================


// STRESS

function calculateStress() {

    const force = Number(document.getElementById("force").value);
    const area = Number(document.getElementById("area").value);
    const result = document.getElementById("stressResult");

    if (force <= 0 || area <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const stress = force / area;

    result.innerHTML = `
        <div>σ = ${formatNumber(force)} / ${formatNumber(area)}</div>
        <strong>${formatNumber(stress)} MPa</strong>
    `;
}


// EFFICIENCY

function calculateEfficiency() {

    const useful = Number(document.getElementById("useful").value);
    const input = Number(document.getElementById("input").value);
    const result = document.getElementById("efficiencyResult");

    if (useful < 0 || input <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const efficiency = (useful / input) * 100;

    result.innerHTML = `
        <div>η = ${formatNumber(useful)} / ${formatNumber(input)}</div>
        <strong>${formatNumber(efficiency)} %</strong>
    `;
}


// TORQUE

function calculateTorque() {

    const force = Number(document.getElementById("torqueForce").value);
    const distance = Number(document.getElementById("distance").value);
    const result = document.getElementById("torqueResult");

    if (force <= 0 || distance <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const torque = force * distance;

    result.innerHTML = `
        <div>τ = ${formatNumber(force)} × ${formatNumber(distance)}</div>
        <strong>${formatNumber(torque)} N·m</strong>
    `;
}


// POWER

function calculatePower() {

    const torque = Number(document.getElementById("powerTorque").value);
    const rpm = Number(document.getElementById("rpm").value);
    const result = document.getElementById("powerResult");

    if (torque <= 0 || rpm <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const angularVelocity = (2 * Math.PI * rpm) / 60;
    const power = torque * angularVelocity;
    const powerKW = power / 1000;

    result.innerHTML = `
        <div>P = T × ω</div>
        <strong>${formatNumber(powerKW)} kW</strong>
    `;
}


// STRAIN

function calculateStrain() {

    const deltaL = Number(
        document.getElementById("lengthChange").value
    );

    const originalL = Number(
        document.getElementById("originalLength").value
    );

    const result = document.getElementById("strainResult");

    if (deltaL <= 0 || originalL <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const strain = deltaL / originalL;

    result.innerHTML = `
        <div>ε = ${formatNumber(deltaL)} / ${formatNumber(originalL)}</div>
        <strong>${formatNumber(strain, 6)}</strong>
    `;
}


// FORCE

function calculateForce() {

    const mass = Number(
        document.getElementById("mass").value
    );

    const gravity = Number(
        document.getElementById("gravity").value
    );

    const result = document.getElementById("forceResult");

    if (mass <= 0 || gravity <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const force = mass * gravity;

    result.innerHTML = `
        <div>F = ${formatNumber(mass)} × ${formatNumber(gravity)}</div>
        <strong>${formatNumber(force)} N</strong>
    `;
}



// ==========================================
// ENERGY
// ==========================================


// KINETIC ENERGY

function calculateKineticEnergy() {

    const mass = Number(
        document.getElementById("kineticMass").value
    );

    const velocity = Number(
        document.getElementById("velocity").value
    );

    const result = document.getElementById("kineticResult");

    if (mass <= 0 || velocity <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const energy = 0.5 * mass * velocity ** 2;

    result.innerHTML = `
        <div>Eₖ = ½mv²</div>
        <strong>${formatNumber(energy)} J</strong>
    `;
}


// POTENTIAL ENERGY

function calculatePotentialEnergy() {

    const mass = Number(
        document.getElementById("potentialMass").value
    );

    const height = Number(
        document.getElementById("height").value
    );

    const result = document.getElementById("potentialResult");

    const gravity = 9.81;

    if (mass <= 0 || height <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const energy = mass * gravity * height;

    result.innerHTML = `
        <div>Eₚ = mgh</div>
        <strong>${formatNumber(energy)} J</strong>
    `;
}


// WORK

function calculateWork() {

    const force = Number(
        document.getElementById("workForce").value
    );

    const displacement = Number(
        document.getElementById("displacement").value
    );

    const result = document.getElementById("workResult");

    if (force <= 0 || displacement <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const work = force * displacement;

    result.innerHTML = `
        <div>W = F × d</div>
        <strong>${formatNumber(work)} J</strong>
    `;
}


// MECHANICAL ENERGY

function calculateMechanicalEnergy() {

    const kinetic = Number(
        document.getElementById("kineticEnergy").value
    );

    const potential = Number(
        document.getElementById("potentialEnergy").value
    );

    const result = document.getElementById("mechanicalResult");

    if (kinetic < 0 || potential < 0) {

        result.textContent = "Enter valid values.";

        return;
    }

    const total = kinetic + potential;

    result.innerHTML = `
        <div>Eₘ = Eₖ + Eₚ</div>
        <strong>${formatNumber(total)} J</strong>
    `;
}



// ==========================================
// THERMODYNAMICS
// ==========================================


// IDEAL GAS

function calculateIdealGas() {

    const n = Number(
        document.getElementById("moles").value
    );

    const temperature = Number(
        document.getElementById("temperature").value
    );

    const volume = Number(
        document.getElementById("volume").value
    );

    const result = document.getElementById("idealGasResult");

    const R = 8.314;

    if (n <= 0 || temperature <= 0 || volume <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const pressure = (n * R * temperature) / volume;

    result.innerHTML = `
        <div>P = nRT / V</div>
        <strong>${formatNumber(pressure)} Pa</strong>
    `;
}


// THERMAL EFFICIENCY

function calculateThermalEfficiency() {

    const work = Number(
        document.getElementById("thermalWork").value
    );

    const heat = Number(
        document.getElementById("heatInput").value
    );

    const result = document.getElementById("thermalResult");

    if (work < 0 || heat <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const efficiency = (work / heat) * 100;

    result.innerHTML = `
        <div>η = W / Qᵢₙ</div>
        <strong>${formatNumber(efficiency)} %</strong>
    `;
}


// COP

function calculateCOP() {

    const cooling = Number(
        document.getElementById("cooling").value
    );

    const work = Number(
        document.getElementById("copWork").value
    );

    const result = document.getElementById("copResult");

    if (cooling <= 0 || work <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const cop = cooling / work;

    result.innerHTML = `
        <div>COP = Q / W</div>
        <strong>${formatNumber(cop)}</strong>
    `;
}



// ==========================================
// FLUIDS
// ==========================================


// PRESSURE

function calculatePressure() {

    const force = Number(
        document.getElementById("pressureForce").value
    );

    const area = Number(
        document.getElementById("pressureArea").value
    );

    const result = document.getElementById("pressureResult");

    if (force <= 0 || area <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const pressure = force / area;

    result.innerHTML = `
        <div>P = F / A</div>
        <strong>${formatNumber(pressure)} Pa</strong>
    `;
}


// FLOW RATE

function calculateFlowRate() {

    const area = Number(
        document.getElementById("flowArea").value
    );

    const velocity = Number(
        document.getElementById("flowVelocity").value
    );

    const result = document.getElementById("flowResult");

    if (area <= 0 || velocity <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const flowRate = area * velocity;

    result.innerHTML = `
        <div>Q = A × v</div>
        <strong>${formatNumber(flowRate, 4)} m³/s</strong>
    `;
}


// REYNOLDS NUMBER

function calculateReynolds() {

    const density = Number(
        document.getElementById("density").value
    );

    const velocity = Number(
        document.getElementById("reVelocity").value
    );

    const length = Number(
        document.getElementById("reLength").value
    );

    const viscosity = Number(
        document.getElementById("viscosity").value
    );

    const result = document.getElementById("reynoldsResult");

    if (
        density <= 0 ||
        velocity <= 0 ||
        length <= 0 ||
        viscosity <= 0
    ) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const reynolds =
        (density * velocity * length) / viscosity;

    result.innerHTML = `
        <div>Re = ρvL / μ</div>
        <strong>${formatNumber(reynolds, 0)}</strong>
    `;
}



// ==========================================
// MATERIALS
// ==========================================


// DENSITY

function calculateDensity() {

    const mass = Number(
        document.getElementById("densityMass").value
    );

    const volume = Number(
        document.getElementById("densityVolume").value
    );

    const result = document.getElementById("densityResult");

    if (mass <= 0 || volume <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const density = mass / volume;

    result.innerHTML = `
        <div>ρ = m / V</div>
        <strong>${formatNumber(density)} kg/m³</strong>
    `;
}


// WEIGHT

function calculateWeight() {

    const mass = Number(
        document.getElementById("weightMass").value
    );

    const gravity = Number(
        document.getElementById("weightGravity").value
    );

    const result = document.getElementById("weightResult");

    if (mass <= 0 || gravity <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const weight = mass * gravity;

    result.innerHTML = `
        <div>W = mg</div>
        <strong>${formatNumber(weight)} N</strong>
    `;
}


// THERMAL EXPANSION

function calculateExpansion() {

    const length = Number(
        document.getElementById("expansionLength").value
    );

    const alpha = Number(
        document.getElementById("alpha").value
    );

    const deltaT = Number(
        document.getElementById("deltaTemperature").value
    );

    const result = document.getElementById("expansionResult");

    if (length <= 0 || alpha <= 0 || deltaT <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const expansion = alpha * length * deltaT;

    result.innerHTML = `
        <div>ΔL = αL₀ΔT</div>
        <strong>${formatNumber(expansion, 6)} m</strong>
    `;
}


// YOUNG'S MODULUS

function calculateYoungsModulus() {

    const stress = Number(
        document.getElementById("youngStress").value
    );

    const strain = Number(
        document.getElementById("youngStrain").value
    );

    const result = document.getElementById("youngResult");

    if (stress <= 0 || strain <= 0) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const youngsModulus = stress / strain;

    result.innerHTML = `
        <div>E = σ / ε</div>
        <strong>${formatNumber(youngsModulus)} MPa</strong>
    `;
}



// ==========================================
// HEAT TRANSFER
// ==========================================


// CONDUCTION

function calculateConduction() {

    const k = Number(
        document.getElementById("conductivity").value
    );

    const area = Number(
        document.getElementById("heatArea").value
    );

    const deltaT = Number(
        document.getElementById("temperatureDifference").value
    );

    const thickness = Number(
        document.getElementById("wallThickness").value
    );

    const result = document.getElementById("conductionResult");

    if (
        k <= 0 ||
        area <= 0 ||
        deltaT <= 0 ||
        thickness <= 0
    ) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const heatTransferRate =
        (k * area * deltaT) / thickness;

    result.innerHTML = `
        <div>Q̇ = kAΔT / L</div>
        <strong>${formatNumber(heatTransferRate)} W</strong>
    `;
}


// HEAT ENERGY

function calculateHeatEnergy() {

    const mass = Number(
        document.getElementById("heatMass").value
    );

    const specificHeat = Number(
        document.getElementById("specificHeat").value
    );

    const deltaT = Number(
        document.getElementById("heatDeltaT").value
    );

    const result = document.getElementById("heatEnergyResult");

    if (
        mass <= 0 ||
        specificHeat <= 0 ||
        deltaT <= 0
    ) {

        result.textContent = "Enter valid positive values.";

        return;
    }

    const heat = mass * specificHeat * deltaT;

    result.innerHTML = `
        <div>Q = mcΔT</div>
        <strong>${formatNumber(heat)} J</strong>
    `;
}

document.addEventListener("DOMContentLoaded", function () {

    const banners = document.querySelectorAll(".banner");

    banners.forEach(function (banner) {

        banner.addEventListener("mouseenter", function () {
            banner.classList.add("active");
        });

        banner.addEventListener("mouseleave", function () {
            banner.classList.remove("active");
        });

    });

});