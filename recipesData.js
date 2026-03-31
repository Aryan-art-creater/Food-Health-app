const recipesData = [
  // --- VEG RECIPES ---
  {
      id: "v1",
      title: "Supergreen Quinoa Bowl",
      category: "veg",
      calories: 320,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1/2 cup cooked quinoa", "1 cup fresh spinach", "1/2 avocado, sliced", "1/4 cup roasted chickpeas", "Lemon herb dressing"],
      instructions: ["Place the cooked quinoa at the base of your bowl.", "Layer the fresh spinach heavily on one side.", "Add the sliced avocado and roasted chickpeas.", "Drizzle generously with your favorite lemon herb dressing before serving."]
  },
  {
      id: "v2",
      title: "Berry Antioxidant Bowl",
      category: "veg",
      calories: 240,
      time: "10 min",
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1/2 cup mixed berries", "1/2 cup Greek yogurt", "1 tbsp chia seeds", "1/4 cup granola", "Honey drizzle"],
      instructions: ["Spoon the Greek yogurt into a bowl.", "Top completely with mixed berries.", "Sprinkle chia seeds and granola over the top.", "Drizzle with honey and serve immediately."]
  },
  {
      id: "v3",
      title: "Avocado Rainbow Salad",
      category: "veg",
      calories: 280,
      time: "12 min",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 ripe avocado", "1/2 cup cherry tomatoes", "1/4 cup corn", "Handful of mixed greens", "Balsamic glaze"],
      instructions: ["Slice the avocado and halve the cherry tomatoes.", "Toss mixed greens and corn in a wide serving bowl.", "Arrange the avocado and tomatoes on top.", "Drizzle lightly with a balsamic glaze."]
  },
  {
      id: "v4",
      title: "Sweet Potato & Chickpea Curry",
      category: "veg",
      calories: 380,
      time: "25 min",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 sweet potato, cubed", "1/2 cup chickpeas", "1/2 cup coconut milk", "Curry powder", "Fresh cilantro"],
      instructions: ["Boil the sweet potato until slightly tender.", "Simmer with chickpeas and coconut milk in a pan.", "Stir in curry powder and let thicken.", "Garnish with fresh cilantro."]
  },
  {
      id: "v5",
      title: "Grilled Tofu with Veggies",
      category: "veg",
      calories: 310,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 block firm tofu", "1 cup broccoli florets", "1 bell pepper, sliced", "Soy sauce", "Sesame seeds"],
      instructions: ["Press the tofu and slice into thick cubes.", "Grill tofu alongside broccoli and bell peppers.", "Brush with soy sauce.", "Sprinkle with sesame seeds and serve warm."]
  },
  {
      id: "v6",
      title: "Creamy Mushroom Risotto",
      category: "veg",
      calories: 420,
      time: "35 min",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 cup arborio rice", "2 cups vegetable broth", "1 cup sliced mushrooms", "1/4 cup parmesan cheese", "Parsley"],
      instructions: ["Sauté mushrooms until golden brown.", "Slowly stir arborio rice into simmering broth.", "Combine mushrooms and cheese until creamy.", "Finish with a sprinkle of fresh parsley."]
  },
  {
      id: "v7",
      title: "Spinach & Feta Stuffed Peppers",
      category: "veg",
      calories: 270,
      time: "30 min",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
      ingredients: ["2 bell peppers", "1 cup spinach", "1/4 cup crumbled feta", "1/2 cup cooked rice", "Olive oil"],
      instructions: ["Halve and hollow out the bell peppers.", "Mix spinach, feta, and cooked rice together.", "Stuff the mixture into the peppers.", "Bake at 375°F for 20 minutes until tender."]
  },
  {
      id: "v8",
      title: "Lentil & Vegetable Stew",
      category: "veg",
      calories: 340,
      time: "40 min",
      image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4859?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 cup brown lentils", "1 carrot, diced", "1 celery stalk, diced", "Vegetable broth", "Thyme"],
      instructions: ["Sauté the carrots and celery in a deep pot.", "Add lentils and cover with vegetable broth.", "Simmer for 30 minutes until lentils are soft.", "Stir in fresh thyme before removing from heat."]
  },
  {
      id: "v9",
      title: "Zucchini Noodles with Pesto",
      category: "veg",
      calories: 210,
      time: "10 min",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      ingredients: ["2 large zucchinis", "1/2 cup basil pesto", "Cherry tomatoes", "Parmesan cheese", "Pine nuts"],
      instructions: ["Spiralize the zucchinis into thin noodles.", "Toss noodles quickly in a hot pan to soften.", "Stir in basil pesto and cherry tomatoes.", "Top with pine nuts and grated parmesan."]
  },

  // --- NON-VEG RECIPES ---
  {
      id: "n1",
      title: "Grilled Lemon Herb Salmon",
      category: "non-veg",
      calories: 450,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 salmon fillet", "1 lemon, sliced", "Fresh dill", "1 tsp olive oil", "Asparagus spears"],
      instructions: ["Preheat grill to medium-high heat.", "Brush salmon with olive oil and top with dill and lemon.", "Grill salmon skin-side down for 8-10 minutes.", "Serve alongside lightly grilled asparagus."]
  },
  {
      id: "n2",
      title: "Garlic Butter Steak Bites",
      category: "non-veg",
      calories: 520,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1544025162-8315ea07f594?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 lb sirloin steak, cubed", "2 tbsp unsalted butter", "3 cloves garlic, minced", "Salt and pepper", "Fresh parsley"],
      instructions: ["Season steak cubes generously with salt and pepper.", "Sear steak in a hot skillet for 2 minutes per side.", "Reduce heat and stir in butter and garlic until fragrant.", "Garnish with parsley and serve immediately."]
  },
  {
      id: "n3",
      title: "Spicy Tuna Poke Bowl",
      category: "non-veg",
      calories: 410,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh sushi-grade tuna", "1/2 cup sushi rice", "1 tbsp spicy mayo", "Edamame", "Seaweed flakes"],
      instructions: ["Dice the tuna into bite-sized cubes.", "Toss the tuna with spicy mayo and soy sauce.", "Assemble over a warm bed of sushi rice.", "Top with edamame and seaweed flakes."]
  },
  {
      id: "n4",
      title: "Honey Mustard Chicken",
      category: "non-veg",
      calories: 380,
      time: "30 min",
      image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80",
      ingredients: ["2 chicken breasts", "2 tbsp honey", "1 tbsp Dijon mustard", "1 tsp garlic powder", "Green beans"],
      instructions: ["Whisk together honey, mustard, and garlic powder.", "Coat chicken breasts completely in the mixture.", "Bake at 400°F for 25 minutes until juices run clear.", "Serve with a side of steamed green beans."]
  },
  {
      id: "n5",
      title: "Shrimp Scampi Pasta",
      category: "non-veg",
      calories: 460,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1/2 lb shrimp, peeled", "4 oz linguine", "2 cloves garlic", "Lemon juice", "Red pepper flakes"],
      instructions: ["Boil linguine until al dente.", "Sauté garlic and shrimp in olive oil until pink.", "Toss the cooked pasta into the shrimp pan.", "Add lemon juice and a pinch of red pepper flakes."]
  },
  {
      id: "n6",
      title: "Turkey Meatballs in Tomato Sauce",
      category: "non-veg",
      calories: 340,
      time: "35 min",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 lb ground turkey", "1 cup marinara sauce", "1/4 cup breadcrumbs", "1 egg", "Basil"],
      instructions: ["Mix turkey, breadcrumbs, and egg, then form into balls.", "Brown meatballs in a skillet for 5 minutes.", "Pour in marinara sauce, cover, and let simmer for 20 minutes.", "Garnish heavily with fresh shredded basil."]
  },
  {
      id: "n7",
      title: "Teriyaki Chicken with Broccoli",
      category: "non-veg",
      calories: 430,
      time: "25 min",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1 lb chicken thighs, cubed", "1/2 cup teriyaki sauce", "1 cup broccoli", "Sesame oil", "Brown rice"],
      instructions: ["Sauté chicken cubes in sesame oil until brown.", "Add broccoli florets and pour in teriyaki sauce.", "Cover and steam for 5 minutes until thick.", "Serve piping hot over a scoop of brown rice."]
  },
  {
      id: "n8",
      title: "Pan-Seared Scallops",
      category: "non-veg",
      calories: 290,
      time: "15 min",
      image: "https://images.unsplash.com/photo-1599084990807-3532f835f8fc?auto=format&fit=crop&w=800&q=80",
      ingredients: ["6 large sea scallops", "1 tbsp butter", "Cauliflower mash", "Lemon zest", "Salt and pepper"],
      instructions: ["Pat the scallops completely dry and season.", "Sear in a screaming hot pan for 90 seconds per side.", "Plate over a generous spread of warm cauliflower mash.", "Finish with fresh lemon zest and cracked pepper."]
  },
  {
      id: "n9",
      title: "Beef Stir-Fry with Snap Peas",
      category: "non-veg",
      calories: 480,
      time: "20 min",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
      ingredients: ["1/2 lb flank steak, sliced thin", "1 cup sugar snap peas", "1/4 cup soy sauce", "1 tsp ginger, minced", "Udon noodles"],
      instructions: ["Flash-fry the beef strips in a hot wok.", "Toss in the sugar snap peas and minced ginger.", "Add cooked udon noodles and soy sauce.", "Toss everything quickly until coated and serve."]
  }
];
