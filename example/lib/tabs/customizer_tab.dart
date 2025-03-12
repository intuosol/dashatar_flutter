import 'dart:math';

import 'package:dashatar_flutter/dashatar_flutter.dart';
import 'package:flutter/material.dart';

class CustomizerTab extends StatefulWidget {
  const CustomizerTab({super.key});

  @override
  State<CustomizerTab> createState() => _CustomizerTabState();
}

class _CustomizerTabState extends State<CustomizerTab> {
  DashatarType _type = DashatarType.developer;
  int _variantIndex = 5;
  Color _backgroundColor = Colors.transparent;

  List<Color> get _colors => [
    Colors.transparent,
    Colors.red.shade100,
    Colors.blue.shade100,
    Colors.green.shade100,
    Colors.yellow.shade100,
    Colors.purple.shade100,
  ];

  void _randomize() {
    setState(() {
      _type = DashatarType.values[Random().nextInt(DashatarType.values.length)];
      _variantIndex = Random().nextInt(49);
      _backgroundColor = _colors[Random().nextInt(_colors.length)];
    });
  }

  @override
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Preview
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surfaceContainerHighest,
                borderRadius: BorderRadius.circular(16),
              ),
              child: Dashatar(
                index: _variantIndex,
                type: _type,
                backgroundColor: _backgroundColor,
                avoidRepeatedImages: false,
              ),
            ),
          ),

          const SizedBox(height: 16),

          // Controls
          Expanded(
            flex: 2,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surfaceContainer,
                borderRadius: BorderRadius.circular(16),
              ),
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'Dashatar Type',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        ElevatedButton(
                          onPressed: _randomize,
                          child: const Text('Randomize'),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),

                    // Type selector
                    DropdownButtonFormField<DashatarType>(
                      decoration: const InputDecoration(
                        labelText: 'Type',
                        border: OutlineInputBorder(),
                      ),
                      value: _type,
                      items:
                          DashatarType.values.map((type) {
                            return DropdownMenuItem<DashatarType>(
                              value: type,
                              child: Text(type.value),
                            );
                          }).toList(),
                      onChanged: (value) {
                        if (value != null) {
                          setState(() {
                            _type = value;
                          });
                        }
                      },
                    ),

                    const SizedBox(height: 16),

                    // Variant index slider
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Variant Index: $_variantIndex',
                          style: const TextStyle(fontWeight: FontWeight.w500),
                        ),
                        Slider(
                          value: _variantIndex.toDouble(),
                          min: 0,
                          max: 48,
                          divisions: 48,
                          label: _variantIndex.toString(),
                          onChanged: (value) {
                            setState(() {
                              _variantIndex = value.round();
                            });
                          },
                        ),
                      ],
                    ),

                    const SizedBox(height: 16),

                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children:
                          _colors.map((color) {
                            return _colorOption(color);
                          }).toList(),
                    ),
                    const SizedBox(height: 16),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _colorOption(Color color) {
    bool isSelected = color == _backgroundColor;
    return InkWell(
      onTap: () {
        setState(() {
          _backgroundColor = color;
        });
      },
      child: Container(
        width: 60,
        height: 60,
        decoration: BoxDecoration(
          color: color,
          border: Border.all(
            color: isSelected ? Colors.blue : Colors.grey,
            width: isSelected ? 3 : 1,
          ),
          borderRadius: BorderRadius.circular(8),
        ),
      ),
    );
  }
}
